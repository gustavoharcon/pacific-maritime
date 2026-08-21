
const TextAndTableOfContents = ({ data }) => {
    const { text } = data;
    return (
        <div className="text-and-table-of-contents">
            <div className="text">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <div className="table-of-contents">
                <div className="table-of-contents-title">
                    <h4>Table of Contents</h4>
                </div>
                <div className="table-of-contents-list">
                    {
                        data.table_of_contents.map((item, index) => (
                            <div className="table-of-contents-item" key={index}>
                                <a
                                    href={item.link}
                                    aria-label={`Section: ${item.text}`}
                                >
                                    {item.text}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TextAndTableOfContents