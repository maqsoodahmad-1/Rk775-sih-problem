import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
function Footer()

{
  return( 
   <footer> 
  <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
  <div class="mr-12 hidden lg:block">
    <span>Get connected with us on social networks:</span>
  </div>
  <div class="flex justify-center">
    <a href="#!" class="mr-6 text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
        class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512">
        <path fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
        </path>
      </svg>
    </a>
    <a href="#!" class="mr-6 text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
        class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
        </path>
      </svg>
    </a>
    <a href="#!" class="mr-6 text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
        class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
        </path>
      </svg>
    </a>
    <a href="#!" class="mr-6 text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
        class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
        </path>
      </svg>
    </a>
    <a href="#!" class="mr-6 text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
        class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
        </path>
      </svg>
    </a>
    <a href="#!" class="text-gray-600">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
        class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
        <path fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
        </path>
      </svg>
    </a>
  </div>
</div>

<div class="topContainer{
">
<a href="https://www.india.gov.in/">
<img
src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png"
class="p-1 bg-white border rounded max-w-sm"
alt="..."
/>
</a>

<a href="http://www.ccdisabilities.nic.in/">
<img  
src="data:image/jpeg;base64,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"
class="p-1 bg-white border rounded max-w-sm"
alt="..."
/>
</a>

<a href="https://www.mygov.in/">
<img 
src="https://th.bing.com/th/id/R.b0cba22b356388ce47a32f60710e9142?rik=4NXdtP1fCG7png&riu=http%3a%2f%2fst1.bgr.in%2fwp-content%2fuploads%2f2015%2f07%2fmygov-app.jpg&ehk=0uWVpzU7f9Vr0PHa1RFzQT9RMhOA8%2bIq5QVcK5YlZmM%3d&risl=&pid=ImgRaw&r=07"
class="p-1 bg-white border rounded max-w-sm"
alt="..."
/>
</a>
</div>


<div class="mx-6 py-10 text-center md:text-left">
  <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div class="">
      <h6 class="
          uppercase
          font-semibold
          mb-4
          flex
          items-center
          justify-center
          md:justify-start
        ">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
          class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
          </path>
        </svg>
        सहदिव्य
      </h6>
      <p>
       Here you can apply for the schemes and get benefits.
      </p>
    </div>
    <div class="">
      <h5 class="mb-4">
        ABOUT
      </h5>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">Terms and condition</a>
      </p>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">About our website</a>
      </p>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">Help</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600">Media</a>
      </p>
    </div>
    <div class="">
      <h5 class="mb-4">
        IMPORTANT LINKS
      </h5>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">Home</a>
      </p>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">Settings</a>
      </p>
      <p class="mb-4">
        <a href="#!" class="text-gray-600">About</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600"> Disability Schemes</a>
      </p>
    </div>
    <div class="">
      <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        Contact
      </h6>
      <p class="flex items-center justify-center md:justify-start mb-4">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
          class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor"
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
          </path>
        </svg>
        Rajasthan,India
      </p>
      <p class="flex items-center justify-center md:justify-start mb-4">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
          class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
          </path>
        </svg>
        schemesdisable.gov.in
      </p>
      <p class="flex items-center justify-center md:justify-start mb-4">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
          class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
          </path>
        </svg>
        + 0144 22567783
      </p>
      <p class="flex items-center justify-center md:justify-start">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
          class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
          </path>
        </svg>
        + 91 6743544890
      </p>
    </div>
  </div>
</div>
<div class="text-center p-6 bg-gray-200">
  <span>© Copyright 2022 Unique Disability ID, Department of Empowerment of Persons with Disabilities,
Ministry of Social Justice and Empowerment, Govt. of India. All Rights Reserved.178.    </span><br />      
<span> Page last updated on : 28/07/2022 | Visitors : UDID</span>
  
</div>
</footer>

)
}
export default Footer;