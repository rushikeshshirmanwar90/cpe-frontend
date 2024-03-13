import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex items-start">
        <div className="flex-1">
          <div>Question 1</div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Select the correct answer.</p>
        </div>
        <Button className="ml-2" size="icon" variant="outline">
          <HelpCircleIcon className="h-4 w-4" />
          <span className="sr-only">Help</span>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-5" htmlFor="paris">
              What is the capital of France?
            </label>
            <div className="flex items-center gap-2">
              <input id="paris" name="answer" type="radio" value="paris" />
              <label className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed" htmlFor="paris">
                Paris
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input id="berlin" name="answer" type="radio" value="berlin" />
              <label className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed" htmlFor="berlin">
                Berlin
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input id="rome" name="answer" type="radio" value="rome" />
              <label className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed" htmlFor="rome">
                Rome
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input id="london" name="answer" type="radio" value="london" />
              <label className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed" htmlFor="london">
                London
              </label>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button>Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function HelpCircleIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}
