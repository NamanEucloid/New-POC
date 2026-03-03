"use client";

import { useEffect } from "react";
import { usePaginationStore } from "@/app/_zustand/paginationStore";

export default function PaginationSync({ hasMore }: { hasMore: boolean }) {
    useEffect(() => {
        usePaginationStore.setState({ hasMore });
    }, [hasMore]);

    return null;
}
