interface IInput {
  type: 'text' | 'textarea' | 'number';
  value: string | number;
  id?: string;
  onChange: (value: any) => void;
  ref: any;
}

const Input = ({ type, value, id, onChange, ref }: IInput) => {
  return (
    <>
      <input
        ref={ref}
        type={type || 'text'}
        value={value}
        id={id}
        onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e)}
      />
    </>
  );
};

export default Input;
