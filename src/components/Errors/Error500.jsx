import { Button, Result } from "antd";

export default function Error500() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Извините, но что то пошло не так."
      extra={
        <Button type="primary" href="/">
          Вернуться домой
        </Button>
      }
    />
  );
}
