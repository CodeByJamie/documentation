"use server";
import { Staff } from "@/database/schemas/staff";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse
) {
      if (req.method === "POST") {
            const staffId = req.body;
            const staff = await Staff.findOne({ id: staffId });

            if (staff) return res.status(200).json({ success: true });
            return res.status(403).json({ success: false, message: "Unauthorized" });
      }
      res.status(405).json({ message: "Method not allowed" });
}
