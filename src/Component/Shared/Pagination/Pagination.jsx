export default function Pagination({ pages, page, setPage }) {
  return (
    <div className="my-5">
      {pages > 0 && (
        <div className="btn-group">
          <a
            onClick={(e) => setPage(Number(e.target.id) - 1)}
            id={page}
            href="#top"
            className="btn btn-sm btn-outline"
            disabled={page === 1}
          >
            Previous page
          </a>
          {[...Array(pages < 5 ? pages : 5).keys()].map((btn) => {
            return (
              <a
                href="#top"
                onClick={(e) => setPage(Number(e.target.innerText))}
                key={btn}
                className={`btn btn-sm bg-white text-black hover:text-white ${
                  page === btn + 1 && "btn-active"
                }`}
              >
                {btn + 1}
              </a>
            );
          })}
          <a
            onClick={(e) => setPage(Number(e.target.id) + 1)}
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
