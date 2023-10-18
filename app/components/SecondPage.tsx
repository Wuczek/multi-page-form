import { useEffect } from "react";

const SecondPage = ({ setChoice, choice }: ChoiceProp) => {
  useEffect(() => {
    const checkInputs = document.getElementsByName("check");
    checkInputs.forEach((element) => {
      if (element.id === choice.plan.name.toLowerCase()) {
        const inputElement = element as HTMLInputElement;
        inputElement.checked = true;
      }
    });
  }, []);

  return (
    <div>
      <form className="flex flex-col items-center my-3 gap-8">
        <div className="flex gap-2 border w-11/12 justify-center p-4">
          <label htmlFor="basic">Basic</label>
          <input
            type="radio"
            id="basic"
            name="check"
            onClick={(e) => setChoice({ ...choice, plan: { name: "Basic" } })}
          />
        </div>
        <div className="flex gap-2 border w-11/12 justify-center p-4">
          <label htmlFor="pro">Pro</label>
          <input
            type="radio"
            id="pro"
            name="check"
            onClick={(e) => setChoice({ ...choice, plan: { name: "Pro" } })}
          />
        </div>
        <div className="flex gap-2 border w-11/12 justify-center p-4">
          <label htmlFor="supreme">Supreme</label>
          <input
            type="radio"
            id="supreme"
            name="check"
            onClick={(e) => setChoice({ ...choice, plan: { name: "Supreme" } })}
          />
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
