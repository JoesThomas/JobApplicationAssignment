import { Application } from 'express';
import axios from 'axios';

const API_URL = 'http://localhost:4000/tasks';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      const response = await axios.get(API_URL);
      res.render('home', { tasks: response.data });
    } catch (error) {
      res.render('home', { tasks: [] });
    }
  });

  app.post('/tasks', async (req, res) => {
    await axios.post(API_URL, req.body);
    res.redirect('/');
  });

  app.post('/tasks/:id/status', async (req, res) => {
    await axios.patch(`${API_URL}/${req.params.id}/status`, {
      status: req.body.status,
    });
    res.redirect('/');
  });

  app.post('/tasks/:id/delete', async (req, res) => {
    await axios.delete(`${API_URL}/${req.params.id}`);
    res.redirect('/');
  });
}
