import {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useState,
} from "preact/compat";

interface CheckSecretModalProps extends PropsWithChildren {
  title: string;
  matchingPassword?: string;
}

const CheckSecretModal: FC<CheckSecretModalProps> = ({
  title,
  matchingPassword,
}) => {
  const [inputPassword, setInputPassword] = useState("");

  const updateInputPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPassword(e.currentTarget.value);
  };

  return (
    <div
      id="check-secret-modal"
      class="fixed top-0 left-0 visible w-screen h-screen bg-slate-900"
    >
      <div class="modal-box relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center my-10">
          <h3 class="text-lg font-bold">
            <span className="font-xl text-primary">{title}</span> 의 비밀번호는?
          </h3>
        </div>

        <div className="flex justify-between my-3 w-[80%] mx-auto">
          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />

          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />

          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />

          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />

          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />

          <input
            type="password"
            class="input input-bordered w-[50px] h-[50px]"
          />
        </div>

        <div class="modal-action">
          <button id="secret-unlock-button" class="btn btn-sm btn-ghost">
            <span className="text-xl font-bold text-primary">언락!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckSecretModal;
