// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
jest.mock(
    "next/image",
    () =>
        function Image({src, alt}) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} />
        },
)

jest.mock(
    "next/head",
    () =>
        function Head({children}) {
            return <>{children}</>
        },
)