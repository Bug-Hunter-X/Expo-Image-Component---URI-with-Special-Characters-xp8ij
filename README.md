# Expo Image Component URI Issue

This repository demonstrates a bug in the Expo `Image` component where images with special characters (spaces, accented characters, etc.) in their URIs fail to load.  The issue is particularly problematic because it doesn't throw any errors, making debugging difficult. This example provides a minimal reproducible example and a potential workaround.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters fails to load, while the image with a simple URI loads correctly.

## Solution

The solution involves URL encoding the URI before passing it to the `Image` component.  This ensures that special characters are properly handled.

## Contributing

Contributions are welcome!  If you find a better solution or have additional insights, please feel free to open a pull request.