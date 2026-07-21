
const CallToAction = () => {
    return (
        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Get the Compliance and Spec Pack</h2>
                    </div>
                    <div className="col">
                        <p className="text">Material certs, finish samples, and lead-time schedules. Standard RFQs quoted in 24 hours; complex refits quoted in 5 to 7 business days. Gated behind a short RFQ form.</p>
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <div className="input-container">
                                        <input type="email" id="email" name="email" placeholder="Email your email" />
                                    </div>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-white-background">Request spec pack</button>
                                </div>
                            </div>
                            <p className="small-text">Your information is secured and it’s never shared.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction