export default function Services() {
  return (
    <section className="services-section" id="section-two">
      {/* section-container */}
      <div className="section2-container">
        {/* top-heading */}
        <div className="underline">
          <h1>
            My <span>Services</span>
          </h1>
        </div>

        <div className="grid">
          {/* box1 */}
          <div className="box box1">
            <svg
              width="75"
              height="64"
              viewBox="0 0 80 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.8788 32.7062C32.66 33.4875 33.9263 33.4875 34.7075 32.7062L36.1213 31.2925C36.9025 30.5112 36.9025 29.245 36.1213 28.4638L31.6562 24L36.12 19.535C36.9012 18.7538 36.9012 17.4875 36.12 16.7063L34.7062 15.2925C33.925 14.5112 32.6587 14.5112 31.8775 15.2925L24.585 22.585C23.8037 23.3662 23.8037 24.6325 24.585 25.4137L31.8788 32.7062ZM43.88 31.2938L45.2938 32.7075C46.075 33.4888 47.3413 33.4888 48.1225 32.7075L55.415 25.415C56.1963 24.6338 56.1963 23.3675 55.415 22.5863L48.1225 15.2937C47.3413 14.5125 46.075 14.5125 45.2938 15.2937L43.88 16.7075C43.0988 17.4888 43.0988 18.755 43.88 19.5362L48.3438 24L43.88 28.465C43.0988 29.2463 43.0988 30.5125 43.88 31.2938ZM78 52H47.6925C47.6 54.4762 45.8538 56 43.6 56H36C33.6637 56 31.8725 53.8162 31.9038 52H2C0.9 52 0 52.9 0 54V56C0 60.4 3.6 64 8 64H72C76.4 64 80 60.4 80 56V54C80 52.9 79.1 52 78 52ZM72 6C72 2.7 69.3 0 66 0H14C10.7 0 8 2.7 8 6V48H72V6ZM64 40H16V8H64V40Z"
                fill="#F86F03"
              />
            </svg>

            <h2>Web Development</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          {/* box2 */}
          <div className="box box1">
            <svg
              width="60"
              height="65"
              viewBox="0 0 50 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5 0H7.5C3.35938 0 0 3.35938 0 7.5V72.5C0 76.6406 3.35938 80 7.5 80H42.5C46.6406 80 50 76.6406 50 72.5V7.5C50 3.35938 46.6406 0 42.5 0ZM25 75C22.2344 75 20 72.7656 20 70C20 67.2344 22.2344 65 25 65C27.7656 65 30 67.2344 30 70C30 72.7656 27.7656 75 25 75ZM42.5 58.125C42.5 59.1562 41.6562 60 40.625 60H9.375C8.34375 60 7.5 59.1562 7.5 58.125V9.375C7.5 8.34375 8.34375 7.5 9.375 7.5H40.625C41.6562 7.5 42.5 8.34375 42.5 9.375V58.125Z"
                fill="#F86F03"
              />
            </svg>

            <h2>App Development</h2>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </p>
          </div>
          {/* box3 */}
          <div className="box box1">
            <svg
              width="75"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 40H58C59 40 60 39 60 38V17C60 16 59 15 58 15H52C51 15 50 16 50 17V38C50 39 51 40 52 40ZM67 40H73C74 40 75 39 75 38V2C75 1 74 0 73 0H67C66 0 65 1 65 2V38C65 39 66 40 67 40ZM22 40H28C29 40 30 39 30 38V27C30 26 29 25 28 25H22C21 25 20 26 20 27V38C20 39 21 40 22 40ZM37 40H43C44 40 45 39 45 38V7C45 6 44 5 43 5H37C36 5 35 6 35 7V38C35 39 36 40 37 40ZM77.5 50H10V2.5C10 1.11875 8.88125 0 7.5 0H2.5C1.11875 0 0 1.11875 0 2.5V55C0 57.7609 2.23906 60 5 60H77.5C78.8812 60 80 58.8812 80 57.5V52.5C80 51.1188 78.8812 50 77.5 50Z"
                fill="#F86F03"
              />
            </svg>

            <h2>Digital Marketing</h2>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
