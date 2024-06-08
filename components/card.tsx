import { astera, apercu } from "@/styles/fonts";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export default function TransparentCard() {
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
      return "Good Morning!";
    } else if (hours < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }
  return (
    <>
      <div className="flex w-[365px] flex-col overflow-hidden rounded-t-lg shadow-2xl">
        <div
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0.09), rgba(0, 0, 0, 0.17))",
            height: "100%",
            width: "100%",
          }}
          className="bg-transparent backdrop-blur-[9px]"
        >
          <h3
            className={`${astera.className} p-4 text-3xl font-normal uppercase tracking-[0.28em] text-slate-50`}
          >
            ARRIVAL
          </h3>
          <div className="mt-32 flex flex-col gap-2 p-4 text-slate-50">
            <h5 className="text-lg font-thin">{getGreeting()}</h5>
            <p className="text-pretty text-sm font-semibold">
              Please authenticate to start using Arrival digital services.
            </p>
            <div className="pl-0 text-xs">
              <Button
                variant="transparent"
                className="flex gap-2 p-4 text-xs uppercase tracking-widest"
              >
                <Icons.check className="h-4 w-4" />
                REMEMBER ME
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="h-24 rounded-b-sm bg-slate-50 p-4"
          style={{
            boxShadow: "rgb(255 255 255 / 26%) 0px -14px 16px 0px",
          }}
        >
          <p className="text-sm text-gray-400">Your email or phone number</p>
          <h2 className="tracking-wide text-gray-600">
            sasha.lovigin@1ne2wo.dev
          </h2>
        </div>

        <div className="flex h-14 items-center rounded-sm bg-slate-50 p-4">
          <h2
            className={`${apercu.className} font-bold uppercase tracking-widest text-gray-600`}
          >
            Login
          </h2>
          <Icons.rightArrow className="ml-auto h-4 w-4" />
        </div>
      </div>
    </>
  );
}
