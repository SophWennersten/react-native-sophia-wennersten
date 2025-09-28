import { useEffect, useState } from "react";
import { getSpells } from "../api/hpApi";
import { Spells } from "../data/spells";

export default function useSpells(){
    const [data, setData] = useState<Spells[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getSpells()
      .then((r) => {
        if (mounted) setData(r);
      })
      .catch((e) => {
        if (mounted) setError(String(e));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);
  return{data, loading, error};
}