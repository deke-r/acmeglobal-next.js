export default function Testimonials() {
    return (
        <>
               <div className="container-fluid py-5 container-2 position-relative">
                {/* Black overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 0,
                }}></div>

                {/* Content above overlay */}
                <div className="container my-4 position-relative" style={{ zIndex: 1 }}>
                    <div className="row mx-md-5 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        We are one of the leading brand communication, promotion, and media buying agencies in the Indian communication and advertising business. As a full-service agency, we offer our customers the entire range of communication disciplines in both classical and digital formats. We blend creativity & technology to transform and grow our clients’ businesses. Our values derive from “enabling our clients”. ACME GLOBAL “moves with your needs” as the market, technology, and consumer needs are not static and we strongly believe that trust is a vital element in all relationships we build.
                        </div>
                    </div>

                    <div className="row mx-md-5 mt-4 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        <img src="/images/team-1.webp" alt="feedback1" className="rounded-circle" height={80}/>
                        </div>
                    </div>

                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        Michel Robert
                        </div>
                    </div>
                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        CEO, ThemeBean
                        </div>
                    </div>
                    <div className="row mx-md-5 my-3 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        Our living status has changed with Sense Projects. They helped us to witness our dreams transforming into reality. With their excellent customer service, instant action is provided in any maintenance issue giving us a hassle-free modern living solution.


                        </div>
                    </div>

                    <div className="row mx-md-5 mt-4 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        <img src="/images/team-2.webp" alt="feedback1" className="rounded-circle" height={80}/>
                        </div>
                    </div>

                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        Cristal Sheds
                        </div>
                    </div>
                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        CEO, Lompian
                        </div>
                    </div>



                    <div className="row mx-md-5 my-3 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        This is the best solution in regards to any construction related work. I am very glad to certify this construction company as the best interior service provider who can transform your entire living style to an ultimate destination.
                        </div>
                    </div>

                    <div className="row mx-md-5 mt-4 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        <img src="/images/team-3.webp" alt="feedback1" className="rounded-circle" height={80}/>
                        </div>
                    </div>

                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        Regal Armas
                        </div>
                    </div>
                    <div className="row mx-md-5 my-1 d-flex justify-content-center">
                        <div className="col-md-6 f_16 text-light fw-semibold text-center">
                        CEO, Shimophi
                        </div>
                    </div>




                    </div>
              
            </div>
        </>
    );
}