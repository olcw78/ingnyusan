import {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "preact/compat";

interface CheckSecretModalProps extends PropsWithChildren {
  title: string;
  matchingPassword?: string;
  unlock: (afterFn: () => void) => void;
}

const CheckSecretModal: FC<CheckSecretModalProps> = ({
  title,
  matchingPassword,
  unlock,
}) => {
  const [inputPassword, setInputPassword] = useState("");

  const updateInputPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPassword(e.currentTarget.value);
  };

  const onUnlock: ChangeEventHandler<HTMLButtonElement> = (e) => {
    unlock(() => {
      console.log("unlock!!!");
    });
  };

  return (
    <div className="modal bg-slate-800 opacity-100 visible z-10">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title} 의 비밀번호는?</h3>

        <input
          type="text"
          className="input max-w-xs w-full z-20"
          value={inputPassword}
          onChange={updateInputPassword}
        />

        <div className="modal-action">
          <button className="btn btn-sm btn-ghost" onClick={onUnlock}>
            입력하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckSecretModal;
