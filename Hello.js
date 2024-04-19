export default function Hello(app) {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    })
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
    const s = (d, f) => {
        d.session['j'] = d.params['k']
        f.send(d.params['k'])
    }
    const g = (h, u) => {
        u.send(h.session['j'])
    }
    app.get('/a/:k', s);
    app.get('/o/:y', g);

}
