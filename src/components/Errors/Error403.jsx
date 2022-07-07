import { Button, Result } from "antd";

export default function Error403() {
  return (
    <Result
      status="403"
      title="Отказ в доступе!"
      subTitle="Извините, но у Вас нет прав для просмотра данной страницы."
      extra={
        <Button type="primary" href="/">
          Вернуться домой
        </Button>
      }
    />
  );
}
