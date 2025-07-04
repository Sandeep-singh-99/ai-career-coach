"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const response = await db.$transaction(
      async (t) => {
        let industryInsight = await t.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // if (!industryInsight) {
        //     industryInsight = await t.industryInsight.create({
        //         data: {
        //             industry: data.industry,
        //             salaryRange: [],
        //             growthRate: 0,
        //             demandLevel: "MEDIUM",
        //             topSkills: [],
        //             marketOutlook: "NEUTRAL",
        //             keyTrends: [],
        //             recomendSkills: [],
        //             nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week later
        //         }
        //     })
        // }

        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);

          industryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        // update the user
        const updatedUser = await t.user.update({
          where: {
            id: user.id,
          },

          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000, // 10 seconds
      }
    );

    return { success: true, ...response };
  } catch (error) {
    console.log("Error updating user:", error.message);
    throw new Error("Failed to update user" + error.message);
  }
}

export async function fetchUserOnBoardingData() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.log("Error fetching user onboarding data:", error.message);
    throw new Error("Failed to fetch user onboarding data");
  }
}
