export interface ContentLoaderConfig {
  style?: Object; // Ex: { marginTop: '50px' }
  type?: string; // Options: facebook, instagram, code
  speed?: number; // Animation speed
  width?: number; // Width component
  height?: number; // Height component
  primaryColor?: string; // Background color of the SVG
  secondaryColor?: string; // The color of the animated gradient
}
