import { Svg } from "components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ color = "primary", ...props }) => {
  return (
    <Svg viewBox="0 0 80 80" width="65" height="65" {...props} color={color}>
      <path d="M 40 7 C 21.785156 7 7 21.785156 7 40 C 7 58.214844 21.785156 73 40 73 C 58.214844 73 73 58.214844 73 40 C 73 21.785156 58.214844 7 40 7 Z M 40 9 C 57.132813 9 71 22.867188 71 40 C 71 57.132813 57.132813 71 40 71 C 22.867188 71 9 57.132813 9 40 C 9 22.867188 22.867188 9 40 9 Z M 40 12 C 39.449219 12 39 12.449219 39 13 C 39 13.550781 39.449219 14 40 14 C 40.550781 14 41 13.550781 41 13 C 41 12.449219 40.550781 12 40 12 Z M 45.292969 12.515625 C 44.804688 12.503906 44.382813 12.84375 44.285156 13.324219 C 44.179688 13.863281 44.53125 14.390625 45.074219 14.5 C 45.613281 14.605469 46.140625 14.253906 46.25 13.714844 C 46.355469 13.171875 46.003906 12.644531 45.464844 12.535156 C 45.40625 12.527344 45.351563 12.519531 45.292969 12.515625 Z M 34.738281 12.519531 C 34.671875 12.519531 34.605469 12.523438 34.539063 12.535156 C 33.996094 12.644531 33.644531 13.171875 33.753906 13.714844 C 33.804688 13.972656 33.957031 14.203125 34.179688 14.351563 C 34.398438 14.496094 34.667969 14.550781 34.929688 14.5 C 35.472656 14.390625 35.824219 13.867188 35.714844 13.324219 C 35.621094 12.859375 35.214844 12.523438 34.738281 12.519531 Z M 29.675781 14.054688 C 29.542969 14.054688 29.410156 14.078125 29.285156 14.128906 C 28.773438 14.34375 28.53125 14.925781 28.746094 15.4375 C 28.957031 15.949219 29.539063 16.191406 30.050781 15.980469 C 30.5625 15.765625 30.804688 15.183594 30.59375 14.671875 C 30.4375 14.300781 30.078125 14.058594 29.675781 14.054688 Z M 50.355469 14.054688 C 49.941406 14.046875 49.566406 14.289063 49.40625 14.671875 C 49.195313 15.183594 49.4375 15.765625 49.949219 15.980469 C 50.460938 16.191406 51.042969 15.949219 51.253906 15.4375 C 51.46875 14.925781 51.226563 14.34375 50.714844 14.128906 C 50.601563 14.082031 50.476563 14.058594 50.355469 14.054688 Z M 25.011719 16.546875 C 24.808594 16.546875 24.609375 16.605469 24.441406 16.71875 C 23.984375 17.023438 23.859375 17.644531 24.167969 18.105469 C 24.472656 18.5625 25.09375 18.6875 25.554688 18.378906 C 26.015625 18.074219 26.136719 17.453125 25.832031 16.996094 C 25.648438 16.71875 25.339844 16.550781 25.011719 16.546875 Z M 55.015625 16.546875 C 54.675781 16.542969 54.355469 16.710938 54.167969 16.996094 C 53.859375 17.453125 53.984375 18.074219 54.441406 18.378906 C 54.902344 18.6875 55.523438 18.5625 55.828125 18.105469 C 55.976563 17.886719 56.03125 17.613281 55.980469 17.355469 C 55.929688 17.09375 55.777344 16.863281 55.554688 16.71875 C 55.394531 16.609375 55.210938 16.550781 55.015625 16.546875 Z M 20.921875 19.90625 C 20.652344 19.90625 20.390625 20.011719 20.203125 20.203125 C 19.8125 20.589844 19.8125 21.226563 20.203125 21.613281 C 20.589844 22.003906 21.226563 22.003906 21.613281 21.613281 C 22.003906 21.226563 22.003906 20.589844 21.613281 20.203125 C 21.429688 20.015625 21.183594 19.910156 20.921875 19.90625 Z M 59.105469 19.90625 C 58.835938 19.90625 58.574219 20.011719 58.386719 20.203125 C 57.996094 20.589844 57.996094 21.226563 58.386719 21.613281 C 58.773438 22.003906 59.410156 22.003906 59.796875 21.613281 C 60.1875 21.226563 60.1875 20.589844 59.796875 20.203125 C 59.613281 20.015625 59.367188 19.910156 59.105469 19.90625 Z M 62.460938 24 C 62.257813 23.996094 62.0625 24.054688 61.894531 24.167969 C 61.4375 24.472656 61.3125 25.09375 61.621094 25.550781 C 61.925781 26.011719 62.546875 26.136719 63.003906 25.828125 C 63.464844 25.519531 63.589844 24.902344 63.28125 24.441406 C 63.097656 24.167969 62.789063 24 62.460938 24 Z M 17.566406 24 C 17.226563 23.992188 16.90625 24.160156 16.71875 24.441406 C 16.414063 24.902344 16.535156 25.523438 16.996094 25.828125 C 17.457031 26.136719 18.074219 26.011719 18.382813 25.554688 C 18.6875 25.09375 18.566406 24.472656 18.105469 24.167969 C 17.945313 24.0625 17.761719 24.003906 17.566406 24 Z M 35.96875 24.648438 L 35.96875 28.84375 L 32.101563 28.84375 L 32.101563 51.390625 L 35.96875 51.390625 L 35.96875 55.351563 L 38.03125 55.351563 L 38.03125 51.390625 L 40.96875 51.390625 L 40.96875 55.351563 L 43.03125 55.351563 L 43.03125 51.285156 C 46.839844 50.78125 49.070313 48.488281 49.070313 45 C 49.070313 42.0625 47.039063 39.890625 43.992188 39.578125 L 43.992188 39.3125 C 46.210938 38.9375 47.945313 36.828125 47.945313 34.46875 C 47.945313 31.550781 46.132813 29.5625 43.03125 29.007813 L 43.03125 24.648438 L 40.96875 24.648438 L 40.96875 28.84375 L 38.03125 28.84375 L 38.03125 24.648438 Z M 64.953125 28.667969 C 64.820313 28.664063 64.6875 28.691406 64.5625 28.742188 C 64.050781 28.953125 63.808594 29.539063 64.019531 30.046875 C 64.234375 30.558594 64.816406 30.800781 65.328125 30.589844 C 65.839844 30.378906 66.082031 29.792969 65.871094 29.28125 C 65.714844 28.914063 65.355469 28.667969 64.953125 28.667969 Z M 15.078125 28.667969 C 14.664063 28.660156 14.289063 28.902344 14.132813 29.285156 C 13.921875 29.796875 14.164063 30.378906 14.671875 30.59375 C 15.183594 30.804688 15.769531 30.5625 15.980469 30.050781 C 16.191406 29.539063 15.949219 28.957031 15.4375 28.746094 C 15.324219 28.695313 15.203125 28.671875 15.078125 28.667969 Z M 35.601563 31.8125 L 40.351563 31.8125 C 42.945313 31.8125 44.460938 33.035156 44.460938 35.109375 C 44.460938 37.25 42.851563 38.390625 39.757813 38.390625 L 35.601563 38.390625 Z M 66.484375 33.734375 C 66.417969 33.730469 66.351563 33.738281 66.285156 33.75 C 65.746094 33.859375 65.394531 34.386719 65.5 34.925781 C 65.609375 35.46875 66.136719 35.820313 66.675781 35.714844 C 67.21875 35.605469 67.570313 35.078125 67.464844 34.535156 C 67.371094 34.070313 66.960938 33.734375 66.484375 33.734375 Z M 13.546875 33.734375 C 13.058594 33.722656 12.636719 34.058594 12.539063 34.535156 C 12.488281 34.796875 12.539063 35.070313 12.6875 35.289063 C 12.835938 35.511719 13.066406 35.664063 13.328125 35.714844 C 13.585938 35.765625 13.855469 35.710938 14.078125 35.566406 C 14.296875 35.417969 14.449219 35.1875 14.5 34.925781 C 14.609375 34.386719 14.257813 33.859375 13.71875 33.75 C 13.660156 33.742188 13.605469 33.734375 13.546875 33.734375 Z M 13 39 C 12.449219 39 12 39.449219 12 40 C 12 40.550781 12.449219 41 13 41 C 13.550781 41 14 40.550781 14 40 C 14 39.449219 13.550781 39 13 39 Z M 67 39 C 66.449219 39 66 39.449219 66 40 C 66 40.550781 66.449219 41 67 41 C 67.550781 41 68 40.550781 68 40 C 68 39.449219 67.550781 39 67 39 Z M 35.601563 41.15625 L 40.460938 41.15625 C 43.757813 41.15625 45.492188 42.394531 45.492188 44.75 C 45.492188 47.144531 43.820313 48.421875 40.664063 48.421875 L 35.601563 48.421875 Z M 13.523438 44.265625 C 13.457031 44.265625 13.390625 44.273438 13.324219 44.285156 C 12.78125 44.394531 12.429688 44.921875 12.539063 45.464844 C 12.648438 46.003906 13.171875 46.355469 13.714844 46.25 C 14.257813 46.140625 14.609375 45.613281 14.5 45.074219 C 14.40625 44.605469 14 44.269531 13.523438 44.265625 Z M 66.507813 44.265625 C 66.019531 44.253906 65.597656 44.59375 65.5 45.074219 C 65.394531 45.613281 65.746094 46.140625 66.285156 46.25 C 66.828125 46.355469 67.355469 46.003906 67.464844 45.464844 C 67.570313 44.921875 67.21875 44.394531 66.675781 44.285156 C 66.621094 44.277344 66.566406 44.269531 66.507813 44.265625 Z M 64.96875 49.328125 C 64.554688 49.320313 64.179688 49.566406 64.019531 49.949219 C 63.808594 50.457031 64.050781 51.042969 64.5625 51.253906 C 65.074219 51.464844 65.65625 51.222656 65.871094 50.714844 C 66.082031 50.203125 65.839844 49.617188 65.328125 49.40625 C 65.214844 49.359375 65.089844 49.332031 64.96875 49.328125 Z M 15.0625 49.332031 C 14.929688 49.332031 14.796875 49.355469 14.671875 49.40625 C 14.429688 49.507813 14.234375 49.703125 14.132813 49.949219 C 14.03125 50.195313 14.03125 50.46875 14.128906 50.714844 C 14.34375 51.226563 14.925781 51.46875 15.4375 51.253906 C 15.683594 51.15625 15.878906 50.960938 15.980469 50.714844 C 16.082031 50.46875 16.082031 50.195313 15.980469 49.949219 C 15.828125 49.578125 15.464844 49.335938 15.0625 49.332031 Z M 62.46875 54 C 62.128906 53.992188 61.808594 54.160156 61.621094 54.441406 C 61.3125 54.902344 61.4375 55.519531 61.894531 55.828125 C 62.113281 55.976563 62.386719 56.03125 62.644531 55.976563 C 62.90625 55.925781 63.136719 55.773438 63.28125 55.550781 C 63.589844 55.09375 63.464844 54.472656 63.003906 54.167969 C 62.847656 54.058594 62.660156 54 62.46875 54 Z M 17.5625 54 C 17.359375 53.996094 17.164063 54.054688 16.996094 54.167969 C 16.539063 54.476563 16.414063 55.09375 16.71875 55.554688 C 17.027344 56.011719 17.648438 56.136719 18.109375 55.828125 C 18.566406 55.523438 18.691406 54.902344 18.382813 54.441406 C 18.199219 54.167969 17.890625 54.003906 17.5625 54 Z M 20.921875 58.09375 C 20.652344 58.089844 20.390625 58.195313 20.203125 58.386719 C 19.8125 58.773438 19.8125 59.410156 20.203125 59.796875 C 20.589844 60.1875 21.226563 60.1875 21.613281 59.796875 C 22.003906 59.410156 22.003906 58.773438 21.613281 58.386719 C 21.429688 58.199219 21.183594 58.09375 20.921875 58.09375 Z M 59.105469 58.09375 C 58.835938 58.089844 58.574219 58.195313 58.386719 58.386719 C 57.996094 58.773438 57.996094 59.410156 58.386719 59.796875 C 58.773438 60.1875 59.410156 60.1875 59.796875 59.796875 C 60.1875 59.410156 60.1875 58.773438 59.796875 58.386719 C 59.613281 58.199219 59.367188 58.09375 59.105469 58.09375 Z M 25.019531 61.449219 C 24.679688 61.441406 24.359375 61.609375 24.171875 61.890625 C 23.863281 62.351563 23.988281 62.972656 24.449219 63.28125 C 24.90625 63.585938 25.527344 63.460938 25.832031 63.003906 C 26.140625 62.542969 26.015625 61.925781 25.558594 61.617188 C 25.398438 61.511719 25.210938 61.449219 25.019531 61.449219 Z M 55.011719 61.449219 C 54.808594 61.445313 54.613281 61.503906 54.445313 61.613281 C 54.222656 61.761719 54.070313 61.992188 54.019531 62.253906 C 53.96875 62.511719 54.023438 62.785156 54.171875 63.003906 C 54.476563 63.460938 55.097656 63.585938 55.558594 63.28125 C 56.015625 62.972656 56.140625 62.351563 55.832031 61.890625 C 55.652344 61.617188 55.34375 61.449219 55.011719 61.449219 Z M 29.691406 63.941406 C 29.277344 63.933594 28.902344 64.179688 28.746094 64.5625 C 28.535156 65.070313 28.777344 65.65625 29.285156 65.867188 C 29.796875 66.078125 30.382813 65.835938 30.59375 65.328125 C 30.804688 64.816406 30.5625 64.230469 30.050781 64.019531 C 29.9375 63.972656 29.816406 63.945313 29.691406 63.941406 Z M 50.339844 63.941406 C 50.207031 63.941406 50.074219 63.96875 49.953125 64.019531 C 49.707031 64.121094 49.511719 64.316406 49.410156 64.558594 C 49.308594 64.804688 49.308594 65.082031 49.40625 65.328125 C 49.621094 65.835938 50.203125 66.078125 50.714844 65.867188 C 50.960938 65.765625 51.15625 65.570313 51.257813 65.328125 C 51.359375 65.082031 51.359375 64.804688 51.257813 64.5625 C 51.105469 64.1875 50.742188 63.945313 50.339844 63.941406 Z M 34.761719 65.480469 C 34.273438 65.46875 33.847656 65.808594 33.753906 66.285156 C 33.644531 66.828125 33.996094 67.351563 34.539063 67.460938 C 35.082031 67.570313 35.605469 67.21875 35.714844 66.675781 C 35.824219 66.132813 35.472656 65.609375 34.929688 65.5 C 34.875 65.488281 34.816406 65.480469 34.761719 65.480469 Z M 45.269531 65.484375 C 45.203125 65.480469 45.136719 65.488281 45.074219 65.5 C 44.53125 65.609375 44.179688 66.132813 44.285156 66.675781 C 44.339844 66.9375 44.492188 67.164063 44.710938 67.3125 C 44.933594 67.460938 45.203125 67.515625 45.464844 67.464844 C 45.722656 67.410156 45.953125 67.257813 46.101563 67.039063 C 46.246094 66.816406 46.300781 66.546875 46.25 66.285156 C 46.15625 65.820313 45.746094 65.484375 45.269531 65.484375 Z M 40 66 C 39.449219 66 39 66.449219 39 67 C 39 67.550781 39.449219 68 40 68 C 40.550781 68 41 67.550781 41 67 C 41 66.449219 40.550781 66 40 66 Z" />
    </Svg>
  );
};

export default Icon;
