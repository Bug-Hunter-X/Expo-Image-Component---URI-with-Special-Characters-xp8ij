This bug occurs when using the Expo `Image` component with a URI that has special characters, such as spaces or accented characters.  The image fails to load, and no error is thrown. The image URI is correctly formatted and accessible from a web browser. The issue seems specific to Expo's handling of URIs within the `Image` component, possibly related to how it handles URL encoding or escaping.