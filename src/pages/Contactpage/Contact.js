import './Contact.css';

const Contact = () => {
    return(
        <main>
            <form className="container col-xl-7 py-5">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Full name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="juan delos santos"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Inquiry</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" id="submit-btn" className="col-xl-2 col-md-2  col-sm-3 col-xs-3 container py-1 mt-2">Submit</button>
            </form>
        </main>
    )
}

export default Contact;
