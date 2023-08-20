import express, { Request, Response } from 'express';

import { AxiosRequestConfig } from 'axios';
import Util from '../util';
import axios from 'axios';

const proxy = express.Router();

proxy.get<{}>('/', async (req: Request, res: Response) => {
  const { url } = req.query;

  // Check if url query param is present
  if (!url && typeof url !== 'string') {
    res.status(400).json({ error: 'Missing url query param' });
  }

  // Create request config
  const requestConfig: AxiosRequestConfig = {
    url: url as string,
    method: req.method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    params: Util.filterProperties({ ...req.query }, ['url']),
  };

  // Make request to endpoint
  const response = await axios(requestConfig);

  return res
    .status(response.status)
    .send(response.data);
    
});

export default proxy;