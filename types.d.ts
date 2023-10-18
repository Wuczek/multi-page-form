type Service = {
  name: string;
  price: string;
  checked: boolean;
};

type Choice = {
  user: {
    name: string;
    surname: string;
    email: string;
  };
  plan: {
    name: string;
  };
  services: Service[];
};

type ChoiceProp = {
  choice: Choice;
  setChoice: React.Dispatch<React.SetStateAction<Choice>>;
};
