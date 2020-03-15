export function getId(params: { id: string } ): number | undefined {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return undefined;
    }
  
    return id;
  } catch (error) {
    return undefined;
  }
}
