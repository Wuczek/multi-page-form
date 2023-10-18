const Buttons = ({
  setPage,
  page,
  choice,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  choice: Choice;
}) => {
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      choice.user.name === "" &&
      choice.user.surname === "" &&
      choice.user.email === ""
    ) {
      alert("Please fill the form");
      return;
    }
    if (page === 2 && choice.plan.name === "") {
      alert("Please choose a plan");
      return;
    }

    if ((e.target as HTMLButtonElement).textContent === "Next") {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="absolute bottom-0 w-full">
      {page === 1 ? (
        <div className="flex justify-end">
          <button onClick={handlePage} type="button" className="p-3">
            Next
          </button>
        </div>
      ) : page === 4 ? (
        <button onClick={handlePage} type="button" className="p-3">
          Prev
        </button>
      ) : (
        <div className="flex justify-between p-3">
          <button onClick={handlePage} type="button">
            Prev
          </button>
          <button onClick={handlePage} type="button">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Buttons;
