const baseUrl = "http://localhost:3001";
const MyJsonServer =
  "https://my-json-server.typicode.com/Takashi-Matsumura/MyJsonServer-test";

export const getAll = async () => {
  const response = await fetch(`${MyJsonServer}/tweets`, { cache: "no-cache" });
  const timeline = await response.json();
  return timeline;
};
