import { useEffect } from "react";

const ThirdPage = ({ setChoice, choice }: ChoiceProp) => {
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const id = inputElement.id;
    const checked = inputElement.checked;
    const services = choice.services.map((service, index) => {
      if (index === Number(id)) {
        return { ...service, checked };
      }
      return service;
    });
    setChoice({ ...choice, services });
  };

  useEffect(() => {
    const checkInputs = document.getElementsByName("checkboxes");
    checkInputs.forEach((element) => {
      const inputElement = element as HTMLInputElement;
      choice.services.forEach((service, index) => {
        if (index === Number(inputElement.id)) {
          inputElement.checked = service.checked;
        }
      });
    });
  }, []);

  return (
    <div>
      <form className="w-10/12 mx-auto mt-3 flex flex-col gap-4">
        <div className="flex justify-between border p-6">
          <div className="flex gap-2">
            <label htmlFor="0">Service 1</label>
            <input
              type="checkbox"
              id="0"
              className="w-5"
              onChange={handleCheck}
              name="checkboxes"
            />
          </div>
          <p>+1$</p>
        </div>
        <div className="flex justify-between border p-6">
          <div className="flex gap-2">
            <label htmlFor="1">Service 2</label>
            <input
              type="checkbox"
              id="1"
              className="w-5"
              onChange={handleCheck}
              name="checkboxes"
            />
          </div>
          <p>+2$</p>
        </div>
        <div className="flex justify-between border p-6">
          <div className="flex gap-2">
            <label htmlFor="2">Service 3</label>
            <input
              type="checkbox"
              id="2"
              className="w-5"
              onChange={handleCheck}
              name="checkboxes"
            />
          </div>
          <p>+3$</p>
        </div>
      </form>
    </div>
  );
};

export default ThirdPage;
