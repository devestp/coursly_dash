export function toPascalCase(text: string): string{
    return text.charAt(0).toUpperCase() + text.substring(1);
}