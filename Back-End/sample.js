app.get('/protected', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
  
    try {
        const decoded = jwt.verify(token, '123456789');
        res.status(200).json({ message: 'This is a protected route', user: decoded });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
  });