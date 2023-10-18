import React from "react";

const FinalPage = ({ setChoice, choice }: ChoiceProp) => {
  const planCost =
    choice.plan.name === "Basic"
      ? "$10"
      : choice.plan.name === "Pro"
      ? "$20"
      : "$30";

  const total = () => {
    let total = 0;
    choice.services.forEach((service) => {
      if (service.checked) {
        total += Number(service.price.slice(0, -1));
      }
    });
    if (choice.plan.name === "Basic") {
      total += 10;
    } else if (choice.plan.name === "Pro") {
      total += 20;
    } else {
      total += 30;
    }
    return total;
  };

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="flex justify-between border p-2">
        <p>{choice.plan.name}</p>
        <p>{planCost}</p>
      </div>
      <div className="flex flex-col border">
        {choice.services.map((service, index) => {
          if (service.checked) {
            return (
              <div className="flex justify-between p-1" key={index}>
                <p>{service.name}</p>
                <p>{service.price}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-col border p-2">
        <p>{choice.user.name}</p>
        <p>{choice.user.surname}</p>
        <p>{choice.user.email}</p>
      </div>
      <div className="flex gap-3 border p-2">
        <p>Total:</p>
        <p>{total()}</p>
      </div>
    </div>
  );
};

export default FinalPage;
