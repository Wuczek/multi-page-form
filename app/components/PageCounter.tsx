import { useEffect } from "react";

const PageCounter = ({ page }: { page: number }) => {
  useEffect(() => {
    const pageCounter = document.querySelectorAll(".page_counter");
    pageCounter.forEach((el, idx) => {
      if (idx + 1 === page) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }, [page]);

  return (
    <section className="flex justify-center mt-3 gap-4">
      <div className="page_counter active">1</div>
      <div className="page_counter">2</div>
      <div className="page_counter">3</div>
      <div className="page_counter">4</div>
    </section>
  );
};

export default PageCounter;
