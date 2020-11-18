import React from 'react';

import { footerLink } from '../config.js';


const Footer = () => <section className="footer">
    <p className="footer__copyright">&copy; Маршак, 2020.</p>
    <p className="footer__author">Сделано студентами <a href={footerLink} className="footer__link">Яндекс.Практикум</a></p>
</section>

export default Footer;