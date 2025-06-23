import type { NextApiRequest, NextApiResponse } from "next";

import data from "../../_data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(data);
}
