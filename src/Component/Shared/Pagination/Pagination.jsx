export default function Pagination({ pages, page, setPage }) {
    return (
        <div className="my-5 flex justify-center">
            {pages > 0 && (
                <div className="btn-group border rounded-lg border-teal-600">
                    <a
                        onClick={e => setPage(Number(e.target.id) - 1)}
                        id={page}
                        href="#top"
                        className="btn btn-sm btn-outline"
                        disabled={page === 1}
                    >
                        Previous page
                    </a>
                    {[...Array(pages < 5 ? pages : 5).keys()].map(btn => {
                        return (
                            <a
                                href="#top"
                                onClick={e =>
                                    setPage(Number(e.target.innerText))
                                }
                                key={btn}
                                className={`btn btn-sm bg-white text-black hover:text-white ${
                                    page === btn + 1 && 'btn-active text-white'
                                }`}
                            >
                                {btn + 1}
                            </a>
                        );
                    })}
                    <a
                        onClick={e => setPage(Number(e.target.id) + 1)}
                        id={page}
                        href="#top"
                        className="btn btn-sm btn-outline"
                        disabled={pages === page}
                    >
                        Next
                    </a>
                </div>
            )}
        </div>
    );
}
