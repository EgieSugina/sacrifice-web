export default function Discord(params) {
  return (
    <>
      <div
        id="drawer-right-example"
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white right-1 w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <iframe
          src={"https://discord.com/widget?id=298777142643261442&theme=dark"}
          className=" h-5/6 w-full"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </>
  );
}
