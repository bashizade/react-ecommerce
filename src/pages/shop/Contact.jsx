const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-3 p-2 rounded-xl bg-base-200">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108415.69293768541!2d54.254365396436974!3d31.87967760150459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fa61993035b2a91%3A0x5d92a19dd7d4a10c!2sYazd%2C%20Yazd%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1696161922922!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                </div>
                <div>
                    <form action="" method="post">
                        <div className="mb-3">
                            <input type="text" placeholder="نام...." className="input input-bordered w-full" dir="rtl" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="ایمیل ....." className="input input-bordered w-full" dir="rtl" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="موضوع...." className="input input-bordered w-full" dir="rtl" />
                        </div>
                        <div className="mb-3">
                            <textarea className="textarea textarea-bordered w-full" placeholder="توضیحات....." dir="rtl"></textarea>
                        </div>
                        <button className="btn btn-primary">ارسال</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;