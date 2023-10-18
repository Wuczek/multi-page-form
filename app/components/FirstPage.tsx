const FirstPage = ({ setChoice, choice }: ChoiceProp) => {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3 my-3 w-11/12 mx-auto"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="border p-1"
          id="name"
          value={choice.user.name}
          onChange={(e) =>
            setChoice({
              ...choice,
              user: { ...choice.user, name: e.target.value },
            })
          }
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          className="border p-1"
          id="surname"
          value={choice.user.surname}
          onChange={(e) =>
            setChoice({
              ...choice,
              user: { ...choice.user, surname: e.target.value },
            })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border p-1"
          id="email"
          value={choice.user.email}
          onChange={(e) =>
            setChoice({
              ...choice,
              user: { ...choice.user, email: e.target.value },
            })
          }
        />
      </form>
    </div>
  );
};

export default FirstPage;
