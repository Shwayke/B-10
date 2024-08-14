// Import React from the 'react' library
import { styleClasses } from '@/Utils/tailwindClasses';
import React from 'react';

// Define the props interface for the Container component
interface ContainerProps{
    children: React.ReactNode // Children elements to be wrapped by the container
}

// Functional component to render a container with centered content
const Container: React.FC<ContainerProps>= ({children}) => {
  return (
    // Render the container with max width, horizontal margin auto, and padding
    <div className={styleClasses.container}>
      {/* Render the children elements */}
        {children}
    </div>
  )
};

export default Container;