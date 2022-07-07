import { Button, Result } from "antd";

export default function Error404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, данной страницы не существует."
      extra={
        <Button type="primary" href="/">
          Вернуться домой
        </Button>
      }
    />
  );
}
