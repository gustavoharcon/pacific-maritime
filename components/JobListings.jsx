
const JobListings = ({ data }) => {
    return (
        <div className="job-listings">
            {
                data.map((item, index) => (
                    <div key={index} className="job-listing">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="icons-container">
                            {
                                // icons.map((item, index)=> (

                                // ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default JobListings