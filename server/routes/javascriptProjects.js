import express from 'express';

const router = express.Router();
import JavascriptProjects from '../models/JavascriptProjects/';


router.route('/')
  .get(async function fetchProjects(req, res, next) {
    try {
      const projects = await JavascriptProjects.find({});
      res.status(200).json(projects);
    } catch (err) {
      res.status(500);
      next(err);
    }
  });

export default router;
