import type { NextApiRequest, NextApiResponse } from "next";
import cats from "../../_data/cats.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    data: cats,
  });
}
