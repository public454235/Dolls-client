

const Footer = () => {
  return (
    <div className="mx-auto">
      <footer className="footer p-10  text-base-content bg-slate-950 mb-12 mt-2">
        <div className="mx-auto">
          <span className="footer-title text-yellow-500 font-bold text-2xl">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="mx-auto">
          <span className="text-yellow-500 font-bold text-2xl footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-yellow-500 font-bold text-2xl">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-yellow-500 font-bold text-2xl">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;