const Footer: React.FC = () => {
    return (
      <footer className="footer bg-gray-800 text-white p-6">
        <div className="footer-container flex flex-wrap justify-between">
          <div className="footer-section">
            <h3 className="footer-title text-xl font-semibold">About Us</h3>
            <ul className="footer-links space-y-2">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title text-xl font-semibold">Services</h3>
            <ul className="footer-links space-y-2">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title text-xl font-semibold">Contact Us</h3>
            <p className="footer-contact">
              <span className="contact-item">123 Main St, Anytown, USA</span><br />
              <span className="contact-item">Email: <a href="mailto:info@example.com">info@example.com</a></span><br />
              <span className="contact-item">Phone: (123) 456-7890</span>
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title text-xl font-semibold">Follow Us</h3>
            <div className="footer-social flex space-x-4">
              <a href="#" className="social-icon text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon text-xl"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center mt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  