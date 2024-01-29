import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createAvatar } from "@dicebear/core";
import { avataaarsNeutral } from "@dicebear/collection";

export const UserAvatar = () => {
  const avatar = createAvatar(avataaarsNeutral, {
    // ... options
  });

  const svg = avatar.toString();

  return (
    <Avatar>
      <AvatarImage src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <AvatarFallback>👋</AvatarFallback>
    </Avatar>
  );
};
