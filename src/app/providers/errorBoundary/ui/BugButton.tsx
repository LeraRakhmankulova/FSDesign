import { useEffect, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

//Для тестиирования
export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <div>
      <Button theme={ButtonTheme.CLEAR} onClick={onError}>
        Выкинуть ошибку
      </Button>
    </div>
  );
};
