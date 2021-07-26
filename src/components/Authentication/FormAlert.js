
import { XCircleIcon } from '@heroicons/react/solid'
import { CheckCircleIcon } from '@heroicons/react/solid'

export default function FormAlert(props) {
    const { type, message, ...otherProps } = props;
  if (props.type ==="error"){return (
     
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">There was an error with your submission</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>{props.message}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
);}
if (props.type ==="success") {
    return (
<div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Welcome to the PlantForm Family</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>Lets plant more together!</p>
          </div>
         
        </div>
      </div>
    </div>
);};
    
  }