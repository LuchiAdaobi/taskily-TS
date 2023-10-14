interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div>
      <form className="input">
        <input
          type="text"
          className="input-box"
          placeholder=" Buy milk"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input-btn" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
